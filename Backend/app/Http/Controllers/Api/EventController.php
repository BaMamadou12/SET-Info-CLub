<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\StoreEventRequest;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{
    /**
     * @author CISSE410
     * Display a listing of the resource.
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $events = Event::with('createdBy')->get();
        return response()->json($events);
    }

    /**
     * @author CISSE410
     * Store a newly created resource in storage.
     * @param \App\Http\Requests\Api\StoreEventRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreEventRequest $request)
    {
        $validatedData = $request->validated();
        $validatedData['created_by'] = Auth::user()->id;

        $event = Event::create($validatedData);

        return response()->json([
            'message' => 'Evénement crée avec succés',
            'event' => $event
        ], 201);
    }

    /**
     * @author CISSE410
     * Display the specified resource.
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $event = Event::with('createdBy')->findOrFail($id);
        return response()->json([
            'message' => "Voici les informations sur l'événement: " . $event->title,
            'event' => $event,
        ]);
    }

    /**
     * @author CISSE410 <cisse410@gmail.com>
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Api\StoreEventRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $event = Event::findOrFail($id);
        $validatedData = $request->validated();

        $event->update($validatedData);

        return response()->json([
            'message' => 'Evénement modifié avec succés',
            'event' => $event,
        ]);
    }

    /**
     * @author CISSE410 <cisse410@gmail.com>
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $event = Event::findOrFail($id);
        $event->delete();

        return response()->json([
            'message' => 'Evénement supprimé avec succés',
        ], 204);
    }
}
