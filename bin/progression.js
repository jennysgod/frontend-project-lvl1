#!/usr/bin/env node
import { rule, game } from '../src/games/brain-progression.js';
import gameEngine from '../src/index.js';

gameEngine(rule, game);
