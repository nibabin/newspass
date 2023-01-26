import React, {ChangeEventHandler} from 'react';

export interface LabeledInputProps {
    labelName: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    id: string;
    name: string;
    type: string;
}

export default function LabeledInput({labelName, ...props} : LabeledInputProps) {
    return <div>
        <label className="block text-sm font-medium text-gray-700">{labelName}</label>
        <div className="mt-1">
            <input {...props} required className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
        </div>
    </div>
}