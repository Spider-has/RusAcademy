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
}
