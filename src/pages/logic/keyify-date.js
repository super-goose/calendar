export const keyifyDate = d => {
    const key = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;

    return key;
}