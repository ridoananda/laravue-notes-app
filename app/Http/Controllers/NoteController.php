<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use App\Models\Note;
use App\Http\Requests\StoreNoteRequest;
use App\Http\Requests\UpdateNoteRequest;
use App\Http\Resources\NoteResource;

class NoteController extends Controller
{
    public function index()
    {
        $note = Note::with('user')->latest()->get();
        return NoteResource::collection($note);
    }

    public function store(StoreNoteRequest $request)
    {
        $attr = $request->all();
        $attr['user_id'] = auth()->user()->id;
        $attr['slug'] = Str::slug($request->get('title'));
        $image = $request->file('image');
        $note = Note::create($attr);
        return response()->json(['message' => 'Notes Created!', $note]);
    }

    public function show(Note $note)
    {
        return new NoteResource($note);
    }

    public function update(UpdateNoteRequest $request, Note $note)
    {
        $attr = $request->all();
        $note->update($attr);
        return response()->json(['message' => 'Note was updated!', $note]);
    }

    public function destroy(Note $note)
    {
        $note->delete();
        return response()->json(['message' => 'Note was deleted!']);
    }
}
