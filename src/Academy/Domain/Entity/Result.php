<?php

namespace App\Academy\Domain\Entity;

use DateTime;

class Result
{
    private int $id;
    private int $userId;
    private DateTime $userTime;
    private int $userResult;
    private int $userScore;
    private int $countOfTries;

    public function __construct(
        int $resultId,
        int $userId,
        DateTime $userTime,
        int $userResult,
        int $userScore,
        int $countOfTries
    ) {
        $resultDataValidator = new ResultDataValidator();
        $resultDataValidator->checkUserResult($userResult);
        $resultDataValidator->checkUserScore($userScore);
        $resultDataValidator->checkUserCountOfTries($countOfTries);

        $this->id = $resultId;
        $this->userId = $userId;
        $this->userTime = $userTime;
        $this->userResult = $userResult;
        $this->userScore = $userScore;
        $this->countOfTries = $countOfTries;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getUserId(): int
    {
        return $this->userId;
    }

    public function getUserTime(): DateTime
    {
        return $this->userTime;
    }

    public function getUserResult(): int
    {
        return $this->userResult;
    }

    public function getUserScore(): int
    {
        return $this->userScore;
    }

    public function getCountOfTries(): int
    {
        return $this->countOfTries;
    }

    public function setUserId(int $userId): void
    {
        $this->userId = $userId;
    }

    public function setUserTime(DateTime $userTime): void
    {
        $this->userTime = $userTime;
    }

    public function setUserResult(int $userResult): void
    {
        $resultDataValidator = new ResultDataValidator();
        $resultDataValidator->checkUserResult($userResult);

        $this->userResult = $userResult;
    }

    public function setUserScore(int $userScore): void
    {
        $resultDataValidator = new ResultDataValidator();
        $resultDataValidator->checkUserScore($userScore);

        $this->userScore = $userScore;
    }

    public function setCountOfTries(int $countOfTries): void
    {
        $resultDataValidator = new ResultDataValidator();
        $resultDataValidator->checkUserCountOfTries($countOfTries);

        $this->countOfTries = $countOfTries;
    }
}
