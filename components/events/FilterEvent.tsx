// comp to filter time period
// material
import {Stack, Button} from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
// react
import { useState } from "react";
// next
import { useRouter } from "next/router";


interface IAppProps {
  slug: string;
}

const FilterEventComponent = (): JSX.Element => {

  // states
  const [fromDate, setFromDate] = useState<Date|null>(null);
  const [toDate, setToDate] = useState<Date|null>(new Date());
  // hook
  const {push} = useRouter();

  // handlers
  const handleFilterClick = (): void => {

    if (fromDate === null || toDate === null) {
      // error, notify
      return;
    }

    const [fromMonth, fromDay, fromYear] = fromDate.toLocaleDateString().split("/");
    const [toMonth, toDay, toYear] = toDate.toLocaleDateString().split("/");

    console.log(fromDay, fromMonth, fromYear);

    push({
      pathname: `/events/${fromMonth}/${fromDay}/${fromYear}/to/${toMonth}/${toDay}/${toYear}`,
      query: {
        fromDate: fromDate.toLocaleDateString(),
        toDate: toDate.toLocaleDateString(),
        type: "filter"
      }
    });

  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack direction={"row"}>
        <DatePicker
          desktopModeMediaQuery={"(min-width:600px)"}
          views={['year', 'month', 'day']}
          label={"From"}
          value={fromDate}
          onChange={date => setFromDate(date)}
          renderInput={(params) => <TextField {...params} />}
        />
        <DatePicker
          desktopModeMediaQuery={"(min-width:600px)"}
          views={['year', 'month', 'day']}
          label={"To"}
          value={toDate ? toDate : new Date()}
          onChange={date => setToDate(date)}
          renderInput={(params) => <TextField {...params} />}
        />
        <Button
          onClick={handleFilterClick}
          variant={"outlined"}
        >
          Filter Events
        </Button>
      </Stack>
    </LocalizationProvider>
  );
};

export default FilterEventComponent;