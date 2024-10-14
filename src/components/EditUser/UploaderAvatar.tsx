import { forwardRef, useEffect, useState } from 'react';
import Icon from '../Icon/Icon';
import foto from '@assets/img/userAvatar/user-dark.png';
import { UploaderAvatarInterface } from './uploaderAvatar.interface';

const UploaderAvatar = forwardRef<HTMLInputElement, UploaderAvatarInterface>(
  ({ error, avatarURL, selectedFile, ...props }, ref) => {
    const [newAvatar, setNewAvatar] = useState<string | null>(null);

    useEffect(() => {
      if (selectedFile && selectedFile.length !== 0) {
        const reader = new FileReader();
        reader.onload = () => {
          const filePath = reader.result as string;
          setNewAvatar(filePath);
        };
        reader.readAsDataURL(new Blob([selectedFile[0]]));
      }
    }, [selectedFile]);

    return (
      <div className="size-[96px] rounded-lg relative mb-4">
        <img src={newAvatar || avatarURL || foto} alt="avatarURL" className="object-cover rounded-lg" />
        <div className="absolute top-[84px] right-[36px] bg-lime-200 p-1 rounded-md w-6 h-6 cursor-pointer">
          <input type="file" ref={ref} className="absolute inset-0 opacity-0 cursor-pointer w-6 h-6" {...props} />
          <Icon id="plus" width="w-4" height="h-4" />
        </div>
      </div>
    );
  }
);

export default UploaderAvatar;
