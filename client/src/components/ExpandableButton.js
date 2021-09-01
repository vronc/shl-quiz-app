import { useEffect, useState } from "react";
import { B } from "./styledComponents/B";
import { Button } from "./styledComponents/Button";
import { Card } from "./styledComponents/Card";
import Checkbox from "./styledComponents/Checkbox";

const ExpandableButton = ({ children, selected, onClick, width }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(selected);
  }, [selected]);

  return (
    <B>
      <Card>
        <B>
          <Button selected={selected} onClick={() => onClick()} width={width}>
            {children}
          </Button>
          {isExpanded && <Checkbox label="include first name" />}
        </B>
      </Card>
    </B>
  );
};

export default ExpandableButton;
