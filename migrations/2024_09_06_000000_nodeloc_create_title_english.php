<?php

use Flarum\Database\Migration;

return [
    'up' => function ($schema) {
        $schema->table('links', function ($table) {
            $table->string('title_english')->default('');
        });
    },
    'down' => function ($schema) {
    },
];
