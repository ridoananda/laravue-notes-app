<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NoteResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'user' => $this->user,
            'category' => $this->category,
            'text' => $this->text,
            'is_active' => $this->is_active === 1 ? true : false,
            'created_at' => $this->created_at->format('d F Y'),
        ];
    }
}
