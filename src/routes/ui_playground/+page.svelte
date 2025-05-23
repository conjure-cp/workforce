<script lang="ts">
  import Chip from "$lib/components/chip/chip.svelte";
  import Combobox from "$lib/components/combobox/combobox.svelte";
  import PersonDataTable from "$lib/components/data-table/person-data-table.svelte";
  import ShiftDataTable from "$lib/components/data-table/shift-data-table.svelte";
  import EditDialog from "$lib/components/edit-dialog/edit-dialog.svelte";
  import CalendarExample from "$lib/components/event-calendar/calendar-example.svelte";
  import TimeGridItem from "$lib/components/event-calendar/time-grid-item.svelte";
  import TimeGrid from "$lib/components/event-calendar/time-grid.svelte";
  import IconPicker from "$lib/components/image-picker/icon-picker.svelte";
  import ImagePicker from "$lib/components/image-picker/image-picker.svelte";
  import { Profile } from "$lib/components/profile";
  import RecurrenceOptionsEdit from "$lib/components/recurrence/recurrence_options_edit.svelte";
  import Search from "$lib/components/search/search.svelte";
  import { Selector } from "$lib/components/selector";
  import SelectorMany from "$lib/components/selector/selector-many.svelte";
  import TimePicker from "$lib/components/time-picker/time-picker.svelte";
  import PropertyPredicateInput from "$lib/components/property/property-predicate.svelte";
  import { Button } from "$lib/components/ui/button";
  import * as Tabs from "$lib/components/ui/tabs";
  import { dummyState } from "$lib/dummy-data";
  import { fmtTime } from "$lib/model/temporal/utils";
  import { Icon, type Display } from "$lib/ui";
  import { randomColor } from "$lib/utils/misc";
  import { faker } from "@faker-js/faker";
  import {
    getLocalTimeZone,
    now,
    Time,
    ZonedDateTime,
    type TimeDuration,
  } from "@internationalized/date";
  import Color from "color";
  import { GraduationCapIcon, XIcon } from "lucide-svelte";
  import { v4 as uuid } from "uuid";
  import { randomPredicate } from "$lib/dummy-data/misc";

  const schedules = [
    { label: "Schedule 1", value: "schedule1" },
    { label: "Schedule 2", value: "schedule2" },
  ];

  function getSuggestions(value: string): Promise<string[]> {
    let ans = [
      "Mornington Crescent",
      "Euston",
      "St Pancras",
      "Elephant & Castle",
      "Waterloo",
      "London Bridge",
      "A very long station name that is very long to test the overflow",
    ].filter((s) => s.toLowerCase().includes(value.toLowerCase()));
    console.log(ans);
    return Promise.resolve(ans);
  }

  let icon: Icon = Icon.fromString("lucide:calendar");
  let dummyDisplay: Display = {
    name: "John Doe",
    icon: Icon.fromString("lucide:user"),
    avatar: new URL(faker.image.avatar()),
  };
  let people = dummyState.people;
  let properties = dummyState.properties;
  let tasks = dummyState.tasks;
  let shifts = dummyState.shifts;

  let time1: ZonedDateTime = now(getLocalTimeZone());
  let time2 = new Date();
  let time3: TimeDuration = { hours: 10, minutes: 30 };

  interface Event {
    start: Time;
    end: Time;
    color: Color;
    id: string;
  }

  let start: Time = new Time(9, 0);
  let end: Time = new Time(17, 0);
  let evStart: Time = new Time(9, 0);
  let evEnd: Time = new Time(17, 0);
  let step = 30;
  let precision = 5;
  let showTime = true;
  let events: Event[] = [
    { start: new Time(10, 0), end: new Time(13, 0), color: randomColor(), id: uuid() },
    { start: new Time(9, 0), end: new Time(15, 0), color: randomColor(), id: uuid() },
    { start: new Time(15, 0), end: new Time(17, 0), color: randomColor(), id: uuid() },
  ];
</script>

<div class="h-dvh w-full overflow-y-scroll bg-background">
  <main class="flex w-full flex-col gap-6 pl-6 pt-4">
    <h1 class="text-2xl font-semibold">Components playground</h1>
    <section class="flex w-full flex-col gap-3">
      <h2 class="text-xl">Search</h2>
      <Search class="w-[250px]" {getSuggestions} />
    </section>
    <section class="flex w-full flex-col gap-3">
      <h2 class="text-xl">Chip</h2>
      <Chip>
        <GraduationCapIcon slot="icon" />
      </Chip>
      <Chip>
        <GraduationCapIcon slot="icon" />
        <XIcon slot="hover_icon" />
      </Chip>
      <Chip variant="outline">
        <GraduationCapIcon slot="icon" />
        <XIcon slot="hover_icon" />
      </Chip>
      <Chip>
        <GraduationCapIcon slot="icon" />
        Chip content
      </Chip>
    </section>
    <section class="flex w-full flex-col gap-3">
      <h2 class="text-xl">Combobox (plain)</h2>
      <Combobox
        display={(item) => (item?.label ? { name: item.label } : { name: "Not selected" })}
        getId={(item) => item?.value}
        options={schedules}
        placeholder="Select schedule..."
        class="w-[250px]"
      />
      <h2 class="text-xl">Combobox (icons)</h2>
      <Combobox
        display={(item) => item}
        getId={(item) => item?.uuid}
        options={$people}
        placeholder="Select person..."
        class="h-14 w-[280px]"
      />
    </section>
    <section class="flex w-full flex-col gap-3">
      <h2 class="text-xl">Time Input</h2>
      <div class="flex flex-row items-center gap-2">
        a:
        <TimePicker bind:value={time1} />
      </div>
      <div class="flex flex-row gap-2">
        b:
        <TimePicker bind:value={time2} />
      </div>
      <div class="flex flex-row gap-2">
        c:
        <TimePicker bind:value={time3} />
      </div>
      <p>a = ZonedDateTime({time1.toString()})</p>
      <p>b = Date({time2.toString()})</p>
      <p>c = {JSON.stringify(time3)}</p>
    </section>
    <section class="flex w-full flex-col gap-3">
      <h2 class="text-xl">Icon Picker</h2>
      <IconPicker />
      <IconPicker bind:icon />
    </section>
    <section class="flex w-full flex-col gap-3">
      <h2 class="text-xl">Image Picker</h2>
      <ImagePicker item={dummyDisplay} />
    </section>
    <section class="flex w-full flex-col gap-3">
      <h2 class="text-xl">Profile</h2>
      <Profile item={$people[0]} placeholder="Select person..." />
      <Profile variant="full" item={$people[0]} placeholder="Select person..." />
      <Profile variant="text" item={$people[0]} placeholder="Select person..." />
    </section>
    <section class="flex w-full flex-col gap-3">
      <h2 class="text-xl">Selector (One)</h2>
      <h3 class="text-lg">Default</h3>
      <Selector value={$people[0]} options={$people} />
      <Selector value={$properties[0]} options={$properties} />
      <h3 class="text-lg">Full</h3>
      <Selector value={$people[0]} options={$people} variant="full" />
      <Selector value={$properties[0]} options={$properties} variant="full" />
      <h3 class="text-lg">Compact</h3>
      <Selector value={$people[0]} options={$people} variant="compact" />
      <Selector value={$properties[0]} options={$properties} variant="compact" />
    </section>
    <section class="flex w-full flex-col gap-3">
      <h2 class="text-xl">Selector (Many)</h2>
      <h3 class="text-lg">Default</h3>
      <SelectorMany value={$people.slice(0, 2)} options={$people} />
      <SelectorMany value={$properties.slice(0, 2)} options={$properties} />
      <h3 class="text-lg">Full</h3>
      <SelectorMany value={$people.slice(0, 2)} options={$people} variant="full" />
      <SelectorMany value={$properties.slice(0, 2)} options={$properties} variant="full" />
      <h3 class="text-lg">Compact</h3>
      <SelectorMany value={$people.slice(0, 2)} options={$people} variant="compact" />
      <SelectorMany value={$properties.slice(0, 2)} options={$properties} variant="compact" />
    </section>
    <section>
      <h2 class="text-xl">Tabs (Vertical)</h2>
      <Tabs.Root value="account" class="w-[400px]" orientation="vertical">
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">Make changes to your account here.</Tabs.Content>
        <Tabs.Content value="password">Change your password here.</Tabs.Content>
      </Tabs.Root>
    </section>
    <section>
      <h2 class="text-xl">Property Predicate</h2>
      <div class="my-2 flex flex-col gap-2">
        {#each $properties as property}
          <span>{property.name}</span>
          <PropertyPredicateInput
            predicate={randomPredicate(property)}
            onChanged={(predicate) => {
              console.log(predicate);
            }}
          />
        {/each}
      </div>
    </section>
    <section>
      <h2 class="mb-1.5 text-xl">Edit Dialog</h2>
      <EditDialog selected={$people[0]} title="Edit Person">
        <Button>Edit Person</Button>
      </EditDialog>
      <EditDialog selected={$properties[0]} title="Edit Property">
        <Button>Edit Property</Button>
      </EditDialog>
      <EditDialog selected={$tasks[0]} title="Edit Task">
        <Button>Edit Task</Button>
      </EditDialog>
    </section>
    <section>
      <h2 class="mb-1.5 text-xl">Data Table - Person</h2>
      <PersonDataTable data={people} state={dummyState} />
    </section>
    <section>
      <h2 class="mb-1.5 text-xl">Data Table - Shift</h2>
      <ShiftDataTable data={shifts} state={dummyState} />
    </section>
    <section>
      <h2 class="mb-1.5 text-xl">Recurrence Editor</h2>
      <div class="flex w-max flex-col gap-6 rounded-lg bg-card p-6">
        <RecurrenceOptionsEdit recurrence={$shifts[0].recurrence.recurrenceOptions} />
      </div>
    </section>
    <section>
      <h2 class="mb-1.5 text-xl">Time Grid Example</h2>
      <div class="flex flex-col gap-6">
        <div class="flex w-24 flex-col gap-2">
          Start time:
          <TimePicker bind:value={start} />
          End time:
          <TimePicker bind:value={end} />
          Step:
          <input type="number" bind:value={step} />
          Precision:
          <input type="number" bind:value={precision} />
          Show time:
          <input type="checkbox" bind:checked={showTime} />
        </div>
        <TimeGrid
          let:tgContext
          {start}
          {end}
          {precision}
          {step}
          {showTime}
          class="h-[600px] w-[350px]"
        >
          {#each events as event (event)}
            <TimeGridItem {tgContext} start={event.start} end={event.end}>
              <button
                class="h-full w-full"
                style="background-color: {event.color.hex()}"
                on:click={() => {
                  events = events.filter((e) => e !== event);
                }}>Event:<br /> {fmtTime(event.start)} - {fmtTime(event.end)}</button
              >
            </TimeGridItem>
          {/each}
        </TimeGrid>
        <div class="flex w-24 flex-col gap-2">
          Event start:
          <TimePicker bind:value={evStart} />
          Event end:
          <TimePicker bind:value={evEnd} />
          <Button
            on:click={() => {
              events = [
                ...events,
                { start: evStart, end: evEnd, color: randomColor(), id: uuid() },
              ];
            }}>Add event</Button
          >
        </div>
      </div>
    </section>
    <section>
      <h2>Event Calendar Example</h2>
      <CalendarExample />
    </section>
  </main>
</div>
