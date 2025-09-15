import { plainToInstance } from 'class-transformer';
import { expect, test } from 'vitest';
import { Team } from './serial02';
import { User } from './user';

test('Team with User array', () => {
  const data = '{"name":"Avengers","members":[{"firstName":"Tony","lastName":"Stark"}]}';
  const team = plainToInstance(Team, JSON.parse(data) as Team);
  
  expect(team.listMembers()).toBe('Tony Stark');
  expect(team.members[0]).toBeInstanceOf(User);
});