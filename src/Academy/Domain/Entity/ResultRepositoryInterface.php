<?php

namespace App\Academy\Domain\Entity;

interface ResultRepositoryInterface
{
    public function get(int $id): Result;

    public function store(Result $result): void;

    public function update(Result $result): void;

    public function takeNewId(): int;
}
