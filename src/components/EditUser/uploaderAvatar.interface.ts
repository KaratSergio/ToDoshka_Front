export interface UploaderAvatarInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  avatarURL?: string;
  selectedFile?: FileList;
}
