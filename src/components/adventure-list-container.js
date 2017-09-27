import React from 'react';
import ADVENTURES from '../adventures';
import AdventureList from './adventure-list';

export default function AdventureListContainer() {
    return (
      <AdventureList adventures={ADVENTURES} />
    )
};