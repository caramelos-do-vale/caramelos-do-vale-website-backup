export function calculatePetAge(birthDate: string): string {
  const birth = new Date(birthDate);
  const today = new Date();

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();

  if (today.getDate() < birth.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years > 0) {
    return years === 1 ? "1 ano" : `${years} anos`;
  }

  if (months > 0) {
    return months === 1 ? "1 mês" : `${months} meses`;
  }

  return "Menos de 1 mês";
}
