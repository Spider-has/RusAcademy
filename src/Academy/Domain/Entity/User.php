<?php

namespace App\Academy\Domain\Entity;

class User
{
    private int $id;
    private string $firstName;
    private string $lastName;
    private string $email;
    private string $password;
    private UserType $type;
    private array $gamesList;
    private int $summaryResult;
    private ?string $patronymic;

    public function __construct(
        int $userId,
        string $firstName,
        string $lastName,
        string $email,
        string $password,
        UserType $type,
        array $gamesList,
        int $summaryResult,
        ?string $patronymic
    ) {
        $userDataValidator = new UserDataValidator();
        $userDataValidator->checkName($firstName, $lastName, $patronymic);
        $userDataValidator->checkEmail($email);
        $userDataValidator->checkPassword($password);

        $this->id = $userId;
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->patronymic = $patronymic;
        $this->email = $email;
        $this->password = $password;
        $this->type = $type;
        $this->gamesList = $gamesList;
        $this->summaryResult = $summaryResult;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getFirstName(): string
    {
        return $this->firstName;
    }

    public function getLastName(): string
    {
        return $this->lastName;
    }

    public function getPatronymic(): ?string
    {
        return $this->patronymic;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function getType(): UserType
    {
        return $this->type;
    }

    public function getGamesList(): array
    {
        return $this->gamesList;
    }

    public function getSummaryResult(): int
    {
        return $this->summaryResult;
    }

    public function setName(string $firstName, string $lastName, ?string $patronymic): void
    {
        $userDataValidator = new UserDataValidator();
        $userDataValidator->checkName($firstName, $lastName, $patronymic);

        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->patronymic = $patronymic;
    }

    public function setEmail(string $email): void
    {
        $userDataValidator = new UserDataValidator();
        $userDataValidator->checkEmail($email);

        $this->email = $email;
    }

    public function setPassword(string $password): void
    {
        $userDataValidator = new UserDataValidator();
        $userDataValidator->checkPassword($password);

        $this->password = $password;
    }

    public function setSummaryResult(int $summaryResult): void
    {
        $userDataValidator = new UserDataValidator();
        $userDataValidator->checkUserSummaryResult($summaryResult);

        $this->summaryResult = $summaryResult;
    }

    public function addGameToList(int $gameId): void
    {
        if (!in_array($gameId, $this->gamesList)) {
            $this->gamesList[] = $gameId;
        }
    }
}
