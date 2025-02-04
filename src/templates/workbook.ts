import { toOneLine } from '../utils';

const workbook = toOneLine(`
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
	<fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="9303"/>
	<workbookPr defaultThemeVersion="124226"/>
	<bookViews>
		<workbookView xWindow="480" yWindow="60" windowWidth="18195" windowHeight="8505"/>
	</bookViews>
	<sheets>
		<sheet name="Data" sheetId="1" r:id="rId1"/>
	</sheets>
	<calcPr calcId="145621"/>
</workbook>`
);

export default workbook;
