<?php

namespace Tests\Domain\Game;

use App\Academy\Domain\Entity\Game;
use App\Academy\Domain\Entity\GameRepositoryInterface;
use App\Academy\Utility\Exception\GameNotFoundException;

class GameRepository implements GameRepositoryInterface
{
    private array $games = [];

    /**
     * @throws GameNotFoundException
     */
    public function get(int $id): Game
    {
        if (!isset($this->games[$id])) {
            throw new GameNotFoundException("Cannot find game with id $id");
        }
        return $this->games[$id];
    }

    public function store(Game $game): void
    {
        $this->games[] = $game;
    }

    public function update(Game $game): void
    {
        // TODO: Implement update() method.
    }

    public function takeNewId(): int
    {
        return count($this->games);
    }
}