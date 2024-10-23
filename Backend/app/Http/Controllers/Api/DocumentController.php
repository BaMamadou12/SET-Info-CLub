<?php

namespace App\Http\Controllers\Api;

use App\Models\Document;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\Api\StoreDocumentRequest;

class DocumentController extends Controller
{
    /**
     * @author CISSE410
     * Display a listing of the resource.
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $documents = Document::with('createdBy')->get();
        return response()->json($documents);
    }

    /**
     * @author CISSE410
     * Store a newly created resource in storage.
     * @param \App\Http\Requests\Api\StoreDocumentRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreDocumentRequest $request)
    {
        $validatedData = $request->validated();

        $file = $request->file('content');
        $extension = $file->getClientOriginalExtension();
        $fileName = $this->generateFileName($validatedData['title'], $extension);

        $path = $file->storeAs('documents', $fileName);

        $document = Document::create([
            'title' => $validatedData['title'],
            'content' => $path,
            'created_by' => Auth::user()->id,
        ]);

        return response()->json([
            'message' => 'Document ajouté avec succés',
            'content' => $document,
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
        $document = Document::with('createdBy')->findOrFail($id);
        return response()->json([
            'message' => "Voici les informations sur le document: " . $document->title,
            'document' => $document,
        ]);
    }

    /**
     * @author CISSE410 <cisse410@gmail.com>
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Api\StoreDocumentRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(StoreDocumentRequest $request, $id)
    {
        $document = Document::findOrFail($id);
        $validatedData = $request->validated();

        if ($request->hasFile('content')) {
            Storage::delete($document->content);

            $file = $request->file('content');
            $extension = $file->getClientOriginalExtension();
            $fileName = $this->generateFileName($validatedData['title'], $extension);

            $path = $file->storeAs('documents', $fileName);
            $validatedData['content'] = $path;
        }

        $document->update($validatedData);

        return response()->json([
            'message' => 'Document modifié avec succés',
            'content' => $document,
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
        $document = Document::findOrFail($id);
        Storage::delete($document->content);
        $document->delete();

        return response()->json([
            'message' => 'Document supprimé avec succés',
        ], 204);
    }

    /**
     * @author CISSE410
     * Générer un nom de fichier formaté.
     *
     * @param string $title
     * @param string $extension
     * @return string
     */
    private function generateFileName($title, $extension)
    {
        $date = now()->format('Y_d_m_H_i');
        $sluggedTitle = Str::slug(substr($title, 0, 50));
        return "{$date}_{$sluggedTitle}.{$extension}";
    }
}
