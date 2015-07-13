package edu.ycp.cs.dh.acegwt.client.ace;

/**
 *	This enumeration represents folding styles.
 */
public enum AceFoldingStyle {
	
	/**
	 * Manual folding style (e.g., no folding?) 
	 */
	MANUAL("manual"),
	
	/**
	 * Folding marker on start marker only
	 */
	MARK_BEGIN("markbegin"),
	
	/**
	 * Folding marker on start and end marker
	 */
	MARK_BEGIN_END("markbeginend");

	private final String name;

	private AceFoldingStyle(final String name) {
		this.name = name;
	}

	/**
	 * @return the marker type name (e.g., "error")
	 */
	public String getName() {
		return name;
	}
}
