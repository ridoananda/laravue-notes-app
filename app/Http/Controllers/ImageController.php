<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Note;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function note(Request $request)
    {
        $url = $request->file('image')->store("/images/note");
        $image = Image::create([
            'url' => $url,
            'description' => $request->description ?? null,
        ]);
        return response()->json([
            'message' => 'Image uploaded!',
            'url' => "/storage/$url"
        ]);
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Images $images)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Images  $images
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Images $images)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Images  $images
     * @return \Illuminate\Http\Response
     */
    public function destroy(Images $images)
    {
        //
    }
}
