import { PostType } from './post-type';
import { Description } from './description';
import { Contact } from './contact';
import { ServiceTime } from './service-time';
export interface Post {
  id: string;
  type: PostType;
  name: string;
  tags: string[];
  logo: string;
  desciptions: Description[];
  contacts: Contact[];
  serviceTime: ServiceTime;
  owner: string;
}
