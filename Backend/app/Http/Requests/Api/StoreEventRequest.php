<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class StoreEventRequest extends FormRequest
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
            'title' => 'required|string|min:3|max:255',
            'description' => 'required|string|min:3',
            'localisation' => 'required|string|min:3|max:255',
            'date_event' => 'required|date|after:today',
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Le titre est obligatoire',
            'title.max' => 'Le titre ne doit pas dépasser 255 caractères',
            'title.min' => 'Trop court (min: 3 caractères)',
            'description.required' => 'La description est obligatoire',
            'description.min' => 'Trop court (min: 3 caractères)',
            'localisation.required' => 'La localisation est obligatoire',
            'localisation.min' => 'Trop court (min: 3 caractères)',
            'localisation.max' => 'La localisation ne doit pas dépasser 255 caractères',
            'date_event.required' => 'La date de l\'événement est obligatoire',
            'date_event.date' => 'La date de l\'événement doit être une date valide',
            'date_event.after' => 'La date de l\'événement doit être postérieure à aujourd\'hui',
        ];
    }
}
