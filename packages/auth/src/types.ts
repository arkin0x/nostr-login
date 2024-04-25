import { Info } from 'nostr-login-components/dist/types/types';

export interface NostrLoginAuthOptions {
  localNsec?: string;
  relays?: string[];
  type: 'login' | 'signup' | 'logout';
  method?: 'connect' | 'readOnly' | 'extension';
}

export interface NostrLoginOptions {
  // optional
  theme?: string;
  startScreen?: string;
  bunkers?: string;
  onAuth?: (npub: string, options: NostrLoginAuthOptions) => void;
  perms?: string;
  darkMode?: boolean;

  iife?: boolean; // for unpkg module

  // forward reqs to this bunker origin for testing
  devOverrideBunkerOrigin?: string;
  isSignInWithExtension?: boolean;
}

export interface IBanner {
  userInfo?: Info | null;
  titleBanner?: string;
  isLoading?: boolean;
  listNotifies?: string[];
  accounts?: Info[];
  isOpen?: boolean;
  notify?: {
    confirm?: number;
    url?: string;
    timeOut?: {
      domain?: string | undefined;
    };
  };
}

export type TypeBanner = IBanner & HTMLElement;

export interface IModal {
  authUrl?: string;
  isLoading?: boolean;
  isLoadingExtension?: boolean;
  isSignInWithExtension?: boolean;
  error?: string;
  signupNameIsAvailable?: string | boolean;
  loginIsGood?: string | boolean;
  isFetchCreateAccount?: boolean;
  recents?: RecentType[];
  accounts?: Info[];
}

export type TypeModal = IModal & HTMLElement;

export interface Response {
  result?: string;
  error?: string;
}

export type RecentType = Pick<Info, 'nip05' | 'picture' | 'pubkey' | 'name' | 'bunkerUrl' | 'authMethod'>;