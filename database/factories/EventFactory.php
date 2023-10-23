<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'event_name' => $this->faker->name(),
            'event_type' => $this->faker->company(),
            'event_location' => $this->faker->address(),
            'event_date' => $this->faker->date(),
            'event_time' => $this->faker->time(),
            'event_capacity' => $this->faker->numberBetween(0, 500),
            'event_avater' => $this->faker->imageUrl(),
            'event_description' => $this->faker->text(),
            'event_price' => $this->faker->numberBetween(30000, 900000),
            'event_user_type' => $this->faker->randomDigit(),
        ];
    }
}
