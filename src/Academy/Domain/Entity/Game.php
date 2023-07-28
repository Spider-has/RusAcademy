<?php

namespace App\Academy\Domain\Entity;

class Game
{
    private int $id;
    private int $maxScore;
    private array $userResultList;

    public function __construct(
        int $gameId,
        int $maxScore,
        array $userResultList
    ) {
        $gameDataValidator = new GameDataValidator();
        $gameDataValidator->checkMaxScore($maxScore);

        $this->id = $gameId;
        $this->maxScore = $maxScore;
        $this->userResultList = $userResultList;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getMaxScore(): int
    {
        return $this->maxScore;
    }

    public function getUserResultList(): array
    {
        return $this->userResultList;
    }

    public function setMaxScore(int $maxScore): void
    {
        $gameDataValidator = new GameDataValidator();
        $gameDataValidator->checkMaxScore($maxScore);

        $this->maxScore = $maxScore;
    }

    public function addResultToList(int $resultId): void
    {
        if (!in_array($resultId, $this->userResultList)) {
            $this->userResultList[] = $resultId;
        }
    }
}
