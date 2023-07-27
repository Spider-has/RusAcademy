<?php

namespace App\Academy\Domain\Service;

use App\Academy\Domain\Entity\User;
use App\Academy\Domain\Entity\UserRepositoryInterface;
use App\Academy\Domain\Entity\UserType;

class UserService
{
    public function __construct(private readonly UserRepositoryInterface $userRepository)
    {
    }

    public function createUser(
        string $firstName,
        string $lastName,
        string $email,
        string $password,
        UserType $type,
        ?string $patronymic
    ): int {
        $userId = $this->userRepository->takeNewId();
        $user = new User($userId, $firstName, $lastName, $email, $password, $type, [], 0, $patronymic);
        $this->userRepository->store($user);
        return $userId;
    }

    public function changeUserName(int $userId, string $firstName, string $lastName, ?string $patronymic): void
    {
        $user = $this->userRepository->get($userId);
        $user->setName($firstName, $lastName, $patronymic);
    }

    public function changeUserEmail(int $userId, string $email): void
    {
        $user = $this->userRepository->get($userId);
        $user->setEmail($email);
    }

    public function changeUserPassword(int $userId, string $password): void
    {
        $user = $this->userRepository->get($userId);
        $user->setPassword($password);
    }

    public function changeSummaryResult(int $userId, string $result): void
    {
        $user = $this->userRepository->get($userId);
        $user->setSummaryResult($result);
    }

    public function appendGameToList(int $userId, int $gameId): void
    {
        $user = $this->userRepository->get($userId);
        $user->addGameToList($gameId);
    }
}
