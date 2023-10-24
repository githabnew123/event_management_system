<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->event_name,
            'type' => $this->event_type,
            'location' => $this->event_location,
            'date' => $this->event_date,
            'time' => $this->event_time,
            'capacity' => $this->event_capacity,
            'avater' => $this->event_avater,
            'description' => $this->event_description,
            'price' => $this->event_price,
            'userType' => $this->event_user_type,
        ];
    }
}
