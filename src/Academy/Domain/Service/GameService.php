<?php

namespace App\Academy\Domain\Service;

use App\Academy\Domain\Entity\Game;
use App\Academy\Domain\Entity\GameRepositoryInterface;

class GameService
{
    public function __construct(private readonly GameRepositoryInterface $gameRepository)
    {
    }

    private function createGame(int $maxScore): int
    {
        $gameId = $this->gameRepository->takeNewId();
        $game = new Game($gameId, $maxScore, []);
        $this->gameRepository->store($game);
        return  $gameId;
    }

    private function changeGameMaxScore(int $gameId, int $maxScore): void
    {
        $game = $this->gameRepository->get($gameId);
        $game->setMaxScore($maxScore);
    }
    private function appendResultToList(int $gameId, int $resultId): void
    {
        $game = $this->gameRepository->get($gameId);
        $game->addResultToList($resultId);
    }
}
