<?php

namespace Tests\Domain\User;

use App\Academy\Domain\Entity\UserType;
use App\Academy\Domain\Service\UserService;
use Tests\TestCase;
use App\Academy\Domain\Entity\User;

class UserServiceTest extends TestCase
{
    private const DEFAULT_ID = 0;
    private const DEFAULT_USER_FIRST_NAME = "Иван";
    private const DEFAULT_USER_LAST_NAME = "Иванов";
    private const DEFAULT_USER_PATRONYMIC = "Иванович";
    private const DEFAULT_USER_EMAIL = "ivaniva@gmail.com";
    private const DEFAULT_USER_PASSWORD = "LxilKD9Pbe";
    private const DEFAULT_USER_TYPE = UserType::USER;

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
}
