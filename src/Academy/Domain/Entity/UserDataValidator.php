<?php

namespace App\Academy\Domain\Entity;

use App\Academy\Utility\Exception\IncorrectDataException;

class UserDataValidator
{
    private const USER_NAME_REGEX = "/^[a-zA-ZА-яёЁ]+$/u";
    private const USER_PASSWORD_REGEX = "^(?=.*\\d)(?=.*[A-Z]).{6,16}^";

    /**
     * @throws IncorrectDataException
     */
    public function checkName(string $firstName, string $lastName, ?string $patronymic): void
    {
        $checkCorrectFirstName = preg_match(self::USER_NAME_REGEX, $firstName);
        $checkCorrectLastName = preg_match(self::USER_NAME_REGEX, $lastName);
        $checkCorrectPatronymic =
            (
                ($patronymic === "") ||
                ($patronymic === null) ||
                preg_match(self::USER_NAME_REGEX, $patronymic)
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
        if (!preg_match(self::USER_PASSWORD_REGEX, $password)) {
            throw new IncorrectDataException("Password is not correct");
        }
    }

    /**
     * @throws IncorrectDataException
     */
    public function checkUserSummaryResult(int $summaryResult): void
    {
        if ($summaryResult < 0) {
            throw new IncorrectDataException("Summary result is not correct");
        }
    }
}
