<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class StoreDocumentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|min:3',
            'content' => 'required|file|mimes:pdf,docx',
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Ce champs est obligatoire',
            'title.min' => 'Titre trop court (min: 3 caractères)',
            'content.required' => 'Ce champs est obligatoire',
            'content.file' => 'Le contenu doit être un fichier',
            'content.mimes' => 'Type de fichier non pris en compte (pdf et docx uniquement)',
        ];
    }
}
