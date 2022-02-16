#!/usr/bin/env node
import { rule, game } from '../src/games/brain-prime.js';
import gameEngine from '../src/index.js';

gameEngine(rule, game);
