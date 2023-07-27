<?php

namespace Tests\Domain\User;

use App\Academy\Domain\Entity\User;
use App\Academy\Domain\Entity\UserRepositoryInterface;
use App\Academy\Utility\Exception\UserNotFoundException;

class UserRepository implements UserRepositoryInterface
{
    private array $users = [];

    /**
     * @throws UserNotFoundException
     */
    public function get(int $id): User
    {
        if (!isset($this->users[$id])) {
            throw new UserNotFoundException("Cannot find user with id $id");
        }
        return $this->users[$id];
    }

    public function store(User $user): void
    {
        $this->users[] = $user;
    }

    public function update(User $user): void
    {
        // TODO: Implement update() method.
    }

    public function takeNewId(): int
    {
        return count($this->users);
    }
}
