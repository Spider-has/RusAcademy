<?php

namespace App\Academy\Domain\Entity;

interface UserRepositoryInterface
{
    public function get(int $id): User;

    public function store(User $user): void;

    public function update(User $user): void;

    public function takeNewId(): int;

    public function createEmailToken(int $userId): string;

    public function checkExistedEmail(string $email): bool;
}
