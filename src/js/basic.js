export default function health(hero) {
  if (hero.health > 50) {
    return 'healthy';
  }
  if (hero.health >= 15 && hero.health <= 50) {
    return 'wounded';
  }
  return 'critical';
}
