# Rwanda Location Selector Component

## Overview

The `RwandaLocationSelector` is a React component that allows users to select a location from a nested hierarchy of geographical areas within Rwanda. The component covers the hierarchy from country to village, including provinces, districts, sectors, and cells. This component is useful for applications that require precise geographical data input.

## Features

- Dynamically updates subsequent dropdowns based on the selected location in the hierarchy.
- Uses React state to manage the selected values for each level of the geographical hierarchy.
- Accepts a callback function (`setLocation`) to update the parent component with the selected location.

## Installation

To use the `RwandaLocationSelector` component in your React application, follow these steps:

1. **Download and include the component files:**
   - `RwandaLocationSelector.tsx`
   - `rwanda.ts` (which contains the geographical data)

2. **Import the component in your application:**

```javascript
import { useState } from "react";
import RwandaLocationSelector, { ILocation } from "./RwandaLocationSelector";

function App() {
  const [location, setLocation] = useState<ILocation | null>(null);

  return (
    <div className="flex justify-center items-center h-screen w-full bg-black text-white flex-col gap-20">
      <RwandaLocationSelector setLocation={setLocation} />
      <div className="my-10 block">
        {location && Object.values(location).filter(loc => !!loc).join(' => ')}
      </div>
    </div>
  );
}

export default App;
```

## Usage

### Component Props

- `setLocation` (optional): A callback function to update the parent component with the selected location.

### Example Usage

```javascript
import { useState } from "react";
import RwandaLocationSelector, { ILocation } from "./RwandaLocationSelector";

function App() {
  const [location, setLocation] = useState<ILocation | null>(null);

  return (
    <div className="flex justify-center items-center h-screen w-full bg-black text-white flex-col gap-20">
      {/* Call the following */}
      <RwandaLocationSelector setLocation={setLocation} />
      {/* End of calling */}
      {/* Example of usage */}
      <div className="my-10 block">
        {location && Object.values(location).filter(loc => !!loc).join(' => ')}
      </div>
    </div>
  );
}

export default App;
```

## Customization

You can customize the styles of the dropdowns by modifying the `geoSelectStyles` variable in the `RwandaLocationSelector` component:

```javascript
const geoSelectStyles = "mb-2 rounded-md border bg-transparent px-2 py-2 mr-2 text-base text-white focus:border-primary focus-visible:shadow-none custom-select";
```

Feel free to change the classes to fit your design requirements.

---

Made by ProgrammerDATCH
