export interface LessonNote{
  id: string;
  classLevel: string;
  subject: string;
  topic: string;
  objectives: string[];
  presentation: any;
}
export interface User{
  id: string;
  email: string;
  role: 'teacher' | 'school-admin';
}