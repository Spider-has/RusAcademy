<?php

namespace App\Academy\Domain\Entity;

use App\Academy\Utility\Exception\IncorrectDataException;

class ResultDataValidator
{
    private const MAX_USER_COURSE_RESULT = 100;

    /**
     * @throws IncorrectDataException
     */
    public function checkUserResult(int $result): void
    {
        if ($result < 0 || $result > self::MAX_USER_COURSE_RESULT) {
            throw new IncorrectDataException("User result is not correct");
        }
    }

    /**
     * @throws IncorrectDataException
     */
    public function checkUserScore(int $score): void
    {
        if ($score < 0) {
            throw new IncorrectDataException("User score is not correct");
        }
    }

    /**
     * @throws IncorrectDataException
     */
    public function checkUserCountOfTries(int $countOfTries): void
    {
        if ($countOfTries < 0) {
            throw new IncorrectDataException("Count of tries are not correct");
        }
    }
}
