/*
 * AXELLIENCE CONFIDENTIAL
 * __________________
 * 
 * [2012] - [2014] Axellience, S.A.S.
 * All Rights Reserved.
 * 
 * NOTICE:  All information contained herein is, and remains
 * the property of Axellience S.A.S. if any.
 * The intellectual and technical concepts contained
 * herein are proprietary to Axellience S.A.S.
 * are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Axellience S.A.S.
 */
package edu.ycp.cs.dh.acegwt.client.ace;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * @author Alexis Muller
 *
 */
public class AceToken
{
	private final String type, value;
	private final int start;
	
	public AceToken(int start, String type, String value)
	{
		this.start = start;
		this.type = type;
		this.value = value;
	}

	/**
	 * @return the type
	 */
	public String getType()
	{
		return type;
	}

	/**
	 * @return the value
	 */
	public String getValue()
	{
		return value;
	}

	/**
	 * @return the start
	 */
	public int getStart()
	{
		return start;
	}
	
	public static AceToken create(int start, String type, String value)
	{
		return new AceToken(start, type, value);
	}
	
	public native JavaScriptObject toJsObject() /*-{
		return {
			start: this.@edu.ycp.cs.dh.acegwt.client.ace.AceToken::start,
			type: this.@edu.ycp.cs.dh.acegwt.client.ace.AceToken::type,
			value: this.@edu.ycp.cs.dh.acegwt.client.ace.AceToken::value
		};
	}-*/;
	
}
