<?php

namespace App\Academy\Domain\Entity;

use App\Academy\Utility\Exception\IncorrectDataException;

class UserDataValidator
{
    private const STRING_REGEX = "/^[a-zA-ZА-яёЁ]+$/u";
    private const VALIDATE_PASSWORD = "^(?=.*\\d)(?=.*[A-Z]).{6,16}^";
    private const MAX_USER_RESULT = 100;

    /**
     * @throws IncorrectDataException
     */
    public function checkName(string $firstName, string $lastName, ?string $patronymic): void
    {
        $checkCorrectFirstName = preg_match(self::STRING_REGEX, $firstName);
        $checkCorrectLastName = preg_match(self::STRING_REGEX, $lastName);
        $checkCorrectPatronymic =
            (
                ($patronymic === "") ||
                ($patronymic === null) ||
                preg_match(self::STRING_REGEX, $patronymic)
            );
        if (!($checkCorrectFirstName && $checkCorrectLastName && $checkCorrectPatronymic)) {
            throw new IncorrectDataException("Full name is not correct");
        }
    }

    /**
     * @throws IncorrectDataException
     */
    public function checkEmail(string $email): void
    {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new IncorrectDataException("Email is not correct");
        }
    }

    /**
     * @throws IncorrectDataException
     */
    public function checkPassword(string $password): void
    {
        if (!preg_match(self::VALIDATE_PASSWORD, $password)) {
            throw new IncorrectDataException("Password is not correct");
        }
    }

    /**
     * @throws IncorrectDataException
     */
    public function checkUserResult(int $result): void
    {
        if ($result < 0 || $result > self::MAX_USER_RESULT) {
            throw new IncorrectDataException("User result is not correct");
        }
    }
}
