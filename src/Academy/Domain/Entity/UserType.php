<?php

namespace App\Academy\Domain\Entity;

enum UserType: int
{
    case USER = 0;
    case ADMIN = 1;
}