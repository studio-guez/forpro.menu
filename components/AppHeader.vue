<template>
    <section class="v-app-header"
    >
        <div class="v-app-header__dates"
        >
            <div class="v-app-header__dates__text"
            >{{formatDates(dates.monday, dates.friday)}}</div>
        </div>
    </section>
</template>





<script setup lang="ts">

const dates = (() => {
    const date = new Date()

    const dayOfWeek = date.getDay();

    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek
    const diffToFriday = 5 - dayOfWeek

    const monday = new Date(date)
    monday.setDate(date.getDate() + diffToMonday)

    const friday = new Date(date)
    friday.setDate(date.getDate() + diffToFriday)

    return { monday, friday };
})()

function formatDates (startDate: Date, endDate: Date): string {
    const formatter = new Intl.DateTimeFormat('fr-FR', { month: 'long' });

    const startDay = startDate.getDate();
    const endDay = endDate.getDate();
    const month = formatter.format(startDate); // Formatte le mois en français

    return `du ${startDay} au ${endDay} ${month.charAt(0).toUpperCase() + month.slice(1)}`;
};

</script>





<style lang="scss" scoped >
.v-app-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.v-app-header__dates {
    color: white;
    background: var(--app-color--purple--dark);
    border-radius: 2rem;
    font-weight: 800;
    height: 1cm;
    width: auto;
    padding: 0 5mm;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: baseline;
}

.v-app-header__dates__text {
    font-size: 15pt;
    line-height: 1.6em;
}
</style>
