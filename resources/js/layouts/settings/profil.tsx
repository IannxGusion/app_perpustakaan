import { ChangeEvent, useState } from 'react';

export default function ProfilePhotoUploader() {
    const [photo, setPhoto] = useState<string | null>(null);

    const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPhoto(imageUrl);
        }
    };

    return (
        <div className="flex flex-col items-center gap-2">
            <img
                src={photo ?? '/default-avatar.png'} // fallback ke avatar default
                alt="Foto Profil"
                className="h-24 w-24 rounded-full border-2 border-gray-300 object-cover"
            />

            <input type="file" accept="image/*" onChange={handlePhotoChange} />
        </div>
    );
}
