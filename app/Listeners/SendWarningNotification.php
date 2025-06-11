<?php

namespace App\Listeners;

use App\Events\ReturnsBook;

class SendWarningNotification
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(ReturnsBook $event): void
    {
        //
    }
}
