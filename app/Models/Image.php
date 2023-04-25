<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;
    protected $fillable = ['url', 'description', 'active', 'imageable_type'];

	public function imageable()
	{
		return $this->morphTo();
	}
    // public function url(): Attribute
	// {
	// 	// return Attribute::make(
	// 	// 	get: fn($value) => "/storage/{$value}"
	// 	// );
	// 	return Attribute::get(fn($value) => "/storage/{$value}");
	// }
}
