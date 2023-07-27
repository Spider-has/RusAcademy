<?php

namespace Tests\Domain\User;

use App\Academy\Domain\Entity\UserType;
use App\Academy\Domain\Service\UserService;
use App\Academy\Utility\Exception\IncorrectDataException;
use Tests\TestCase;

class UserServiceTest extends TestCase
{
    private const DEFAULT_USER_FIRST_NAME = "Иван";
    private const DEFAULT_USER_LAST_NAME = "Иванов";
    private const DEFAULT_USER_PATRONYMIC = "Иванович";
    private const DEFAULT_USER_EMAIL = "default.user.email@gmail.com";
    private const DEFAULT_USER_PASSWORD = "Gt123Fg";
    private const DEFAULT_USER_TYPE = UserType::USER;

    private const CHANGED_USER_FIRST_NAME = "Fanatcio";
    private const CHANGED_USER_LAST_NAME = "Admiral";
    private const CHANGED_USER_EMAIL = "changed.user.email@gmail.com";
    private const CHANGED_USER_PASSWORD = "LopKjf21";
    private const CHANGED_USER_SUMMARY_RESULT = 20;
    private const CHANGED_USER_GAMES_LIST = [0];

    private const ERROR_USER_FIRST_NAME = "11322";
    private const ERROR_USER_EMAIL = "111@gmail.com";
    private const ERROR_USER_PASSWORD = "123456";

    public function testCreateUser(): void
    {
        $userRepository = new UserRepository();
        $userService = new UserService($userRepository);
        $userId = $userService->createUser(
            self::DEFAULT_USER_FIRST_NAME,
            self::DEFAULT_USER_LAST_NAME,
            self::DEFAULT_USER_EMAIL,
            self::DEFAULT_USER_PASSWORD,
            self::DEFAULT_USER_TYPE,
            self::DEFAULT_USER_PATRONYMIC
        );
        $user = $userRepository->get($userId);
        self::assertTrue($user !== null);
    }

    public function testErrorCreateUser(): void
    {
        $userRepository = new UserRepository();
        $userService = new UserService($userRepository);
        $this->expectException(IncorrectDataException::class);
        $userId = $userService->createUser(
            self::ERROR_USER_FIRST_NAME,
            self::DEFAULT_USER_LAST_NAME,
            self::ERROR_USER_EMAIL,
            self::ERROR_USER_EMAIL,
            self::DEFAULT_USER_TYPE,
            self::DEFAULT_USER_PATRONYMIC
        );
    }

    public function testChangeUser(): void
    {
        $userRepository = new UserRepository();
        $userService = new UserService($userRepository);
        $userId = $userService->createUser(
            self::DEFAULT_USER_FIRST_NAME,
            self::DEFAULT_USER_LAST_NAME,
            self::DEFAULT_USER_EMAIL,
            self::DEFAULT_USER_PASSWORD,
            self::DEFAULT_USER_TYPE,
            self::DEFAULT_USER_PATRONYMIC
        );
        $userService->changeUserName(
            $userId,
            self::CHANGED_USER_FIRST_NAME,
            self::CHANGED_USER_LAST_NAME,
            null
        );
        $userService->changeUserEmail($userId, self::CHANGED_USER_EMAIL);
        $userService->changeUserPassword($userId, self::CHANGED_USER_PASSWORD);
        $userService->changeSummaryResult($userId, self::CHANGED_USER_SUMMARY_RESULT);
        $userService->appendGameToList($userId, 0);

        $user = $userRepository->get($userId);
        $userFirstName = $user->getFirstName();
        $userLastName = $user->getLastName();
        $userPatronymic = $user->getPatronymic();
        $userEmail = $user->getEmail();
        $userPassword = $user->getPassword();
        $userSummaryResult = $user->getSummaryResult();
        $userGamesList = $user->getGamesList();

        $this->assertTrue(
            $userFirstName === self::CHANGED_USER_FIRST_NAME &&
            $userLastName === self::CHANGED_USER_LAST_NAME &&
            $userPatronymic === null &&
            $userEmail === self::CHANGED_USER_EMAIL &&
            $userPassword === self::CHANGED_USER_PASSWORD &&
            $userSummaryResult === self::CHANGED_USER_SUMMARY_RESULT &&
            $userGamesList === self::CHANGED_USER_GAMES_LIST
        );
    }

    public function testErrorChangeUser(): void
    {
        $userRepository = new UserRepository();
        $userService = new UserService($userRepository);
        $userId = $userService->createUser(
            self::DEFAULT_USER_FIRST_NAME,
            self::DEFAULT_USER_LAST_NAME,
            self::DEFAULT_USER_EMAIL,
            self::DEFAULT_USER_PASSWORD,
            self::DEFAULT_USER_TYPE,
            self::DEFAULT_USER_PATRONYMIC
        );
        $this->expectException(IncorrectDataException::class);
        $userService->changeUserName(
            $userId,
            self::ERROR_USER_FIRST_NAME,
            self::DEFAULT_USER_LAST_NAME,
            self::DEFAULT_USER_PATRONYMIC
        );
        $userService->changeUserEmail($userId, self::ERROR_USER_EMAIL);
        $userService->changeUserPassword($userId, self::ERROR_USER_PASSWORD);
    }
}
