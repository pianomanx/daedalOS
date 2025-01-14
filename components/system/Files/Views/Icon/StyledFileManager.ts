import type { StyledFileManagerProps } from "components/system/Files/Views";
import styled from "styled-components";
import ScrollBars from "styles/common/ScrollBars";
import { DEFAULT_SCROLLBAR_WIDTH } from "utils/constants";

const StyledFileManager = styled.ol<StyledFileManagerProps>`
  ${({ $scrollable }) =>
    $scrollable ? ScrollBars(DEFAULT_SCROLLBAR_WIDTH) : undefined};

  column-gap: ${({ theme }) => theme.sizes.fileManager.columnGap};
  contain: strict;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: ${({ theme }) =>
    `repeat(auto-fill, ${theme.sizes.fileManager.gridEntryWidth})`};
  grid-template-rows: ${({ theme }) =>
    `repeat(auto-fill, ${theme.sizes.fileManager.gridEntryHeight})`};
  height: 100%;
  overflow: ${({ $scrollable }) => ($scrollable ? undefined : "hidden")};
  padding: ${({ theme }) => theme.sizes.fileManager.padding};
  pointer-events: ${({ $selecting }) => ($selecting ? "auto" : undefined)};
  row-gap: ${({ theme }) => theme.sizes.fileManager.rowGap};

  main > & {
    grid-auto-flow: column;
    height: ${({ theme }) => `calc(100% - ${theme.sizes.taskbar.height})`};
    overflow: visible;
    padding-bottom: 21px;
  }
`;

export default StyledFileManager;
