<?php

namespace App\Academy\Domain\Entity;

interface GameRepositoryInterface
{
    public function get(int $id): Game;

    public function store(Game $game): void;

    public function update(Game $game): void;

    public function takeNewId(): int;
}
