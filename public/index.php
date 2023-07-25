<?php

declare(strict_types=1);

use Slim\Factory\AppFactory;
use Slim\Views\Twig;
use Slim\Views\TwigMiddleware;

require __DIR__ . '/../vendor/autoload.php';

$isProduction = getenv('APP_ENV') === 'prod';

$app = AppFactory::create();

$app->addRoutingMiddleware();
$errorMiddleware = $app->addErrorMiddleware(!$isProduction, true, true);

$twig = Twig::create(__DIR__ . '/../templates/', $isProduction ? ['cache' => __DIR__ . '/../var/cache/'] : []);
$app->add(TwigMiddleware::create($app, $twig));

$app->get('/', \App\Controller\UserPageController::class . ':userPage')->setName('userPage');

$app->run();