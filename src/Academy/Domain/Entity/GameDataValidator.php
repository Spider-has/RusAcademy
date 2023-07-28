<?php

namespace App\Academy\Domain\Entity;

use App\Academy\Utility\Exception\IncorrectDataException;

class GameDataValidator
{
    /**
     * @throws IncorrectDataException
     */
    public function checkMaxScore(int $maxScore): void
    {
        if ($maxScore < 0) {
            throw new IncorrectDataException("Max score is not correct");
        }
    }
}
