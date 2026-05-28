export function getNextBusinessDays(count = 4, lang = "es") {
  const days = [];
  const current = new Date();

  const dayNames = {
    es: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
    en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  };

  const monthNames = {
    es: [
      "Ene", "Feb", "Mar", "Abr", "May", "Jun",
      "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
    ],
    en: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
  };

  while (days.length < count) {
    current.setDate(current.getDate() + 1);

    const dayIndex = current.getDay();

    // Excluir sábado y domingo
    if (dayIndex !== 0 && dayIndex !== 6) {
      const dayName = dayNames[lang][dayIndex];
      const dayNumber = current.getDate();
      const month = monthNames[lang][current.getMonth()];

      days.push(`${dayName} ${dayNumber} ${month}`);
    }
  }

  return days;
}